import { getCustomer } from "@/utilities/getCustomer";

export async function GET() {
  const user = await getCustomer();
  return Response.json({ user }, { status: 200 });
}
