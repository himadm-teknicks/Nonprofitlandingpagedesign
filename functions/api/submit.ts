interface Env {
  RESEND_API_KEY: string;
  RECIPIENT_EMAIL?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const { firstName, organization, email, eventDate, message } =
    await request.json<Record<string, string>>();

  if (!firstName || !organization || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const to = env.RECIPIENT_EMAIL || "himad.mouhtar@teknicks.com";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vision Event Co. <onboarding@resend.dev>",
      to,
      subject: `New Consultation Request from ${firstName} (${organization})`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Timeline:</strong> ${eventDate || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
