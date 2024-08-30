"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GRADIENT_COLORS, ProductSchema, ProductType } from "./product.schema";
import slugify from "slugify";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createProductAction, editProductAction } from "./product.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type ProductFormProps = {
  defaultValues?: ProductType;
  productId?: string;
};

export default function ProductForm(props: ProductFormProps) {
  const form = useZodForm({
    schema: ProductSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (value: ProductType) => {
      const { data, serverError } = isCreate
        ? await createProductAction(value)
        : await editProductAction({ id: props.productId ?? "", data: value });

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }

      toast.success(
        isCreate
          ? "Product created successfully"
          : "Product updated successfully"
      );
      router.push(`/products/${data.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate ? "Create Product" : `Edit ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="space-y-4 flex flex-col gap-4"
          form={form}
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the product that will be displayed to the
                  customer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Slug"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                        .replaceAll(/\s+/g, "-")
                        .toLowerCase();
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  This is the slug of the product that will be used in the URL.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Color</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      {GRADIENT_COLORS.map((color) => (
                        <SelectItem key={color} value={color}>
                          <div className="flex items-center">
                            <span
                              className={cn(
                                color,
                                "block w-8 h-8 rounded-md mr-2"
                              )}
                            />
                            {color.split(" ").pop()?.split("-").pop()}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  The review page will have a gradient background with this
                  color and the text color will be white.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>{isCreate ? "Create" : "Update"}</Button>
        </Form>
      </CardContent>
    </Card>
  );
}
