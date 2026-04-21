import { prisma } from "@/lib/prisma";

// LISTAR
export async function GET() {
  const data = await prisma.contacts.findMany();
  return Response.json(data);
}

// CREAR
export async function POST(req: Request) {
  const body = await req.json();

  const newContact = await prisma.contacts.create({
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email,
      message: body.message,
    },
  });

  return Response.json(newContact);
}