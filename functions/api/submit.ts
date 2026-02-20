interface Env {
  RESEND_API_KEY: string;
  RECIPIENT_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const { firstName, organization, email, eventDate, eventVenue, message, turnstileToken } =
    await request.json<Record<string, string>>();

  if (!firstName || !organization || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Verify Cloudflare Turnstile token
  if (!turnstileToken) {
    return new Response(JSON.stringify({ error: "CAPTCHA verification required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );

  const turnstileData = await turnstileRes.json<{ success: boolean; "error-codes"?: string[] }>();

  if (!turnstileData.success) {
    return new Response(JSON.stringify({ error: "CAPTCHA verification failed" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const to = env.RECIPIENT_EMAIL.split(",").map((e) => e.trim());

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vision Event Co. <noreply@notifications.visioneventco.com>",
      to,
      subject: `New Consultation Request from ${firstName} (${organization})`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Timeline:</strong> ${eventDate || "Not specified"}</p>
        <p><strong>Event Venue:</strong> ${eventVenue || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend API error:", res.status, err);
    return new Response(JSON.stringify({ error: "Failed to send email", details: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
