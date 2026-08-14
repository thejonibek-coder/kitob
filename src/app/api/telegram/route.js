export async function POST(request) {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return Response.json(
        { error: "Ma'lumotlar to'liq emas" },
        { status: 400 }
      );
    }

    const message = `
📚 Yangi fikr!

👤 Ism: ${title}

💬 Fikr:
${description}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return Response.json(
        { error: "Telegramga yuborishda xatolik", details: data },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}