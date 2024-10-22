import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not set in environment variables");
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `User interested in DokkuAI 🎉 \n\n Email: ${email}`,
            },
          },
        ],
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Successfully added to waitlist" });
    } else {
      const errorText = await response.text();
      console.error("Slack API error:", errorText);
      return NextResponse.json(
        { message: "Failed to send to Slack" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
