import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Portfólio <onboarding@resend.dev>",
    to: "skiter.rafael@gmail.com",
    replyTo: email,
    subject: `Contato do portfólio: ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
