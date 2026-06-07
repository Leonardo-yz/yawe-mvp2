import { z } from "zod";

export const donationSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  amount: z.number().positive("Amount must be greater than 0"),
  paymentMethod: z.string().min(2),
  message: z.string().optional(),
  isRecurring: z.boolean().optional(),
});