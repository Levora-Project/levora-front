import { notFound } from "next/navigation";
import ChatBubble from "@/feature/decoments/component/chat/ChatBubble";
import EligibilityNoticeCard from "@/feature/decoments/component/chat/EligibilityNotice";
import { scholarshipChats } from "@/feature/decoments/component/chat/chat.data";

export default async function ScholarshipChatPage({
    params,
}: {
    params: Promise<{ scholarshipId: string }>;
}) {
    const { scholarshipId } = await params;
    const chat = scholarshipChats.find((c) => c.id === scholarshipId);

    if (!chat) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FAF8F3]">
            <main className="mx-auto max-w-2xl px-6 py-8">
                {/* Header */}
                <div className="mb-1">
                    <h1 className="text-lg font-semibold text-stone-900">
                        Chatting about: {chat.scholarshipName}
                    </h1>
                    <p className="text-xs text-stone-400 mt-1">
                        ⓘ All guidance does not guarantee application outcomes
                    </p>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    {chat.messages.map((message) => (
                        <ChatBubble key={message.id} message={message} />
                    ))}

                    {chat.eligibilityNotice && (
                        <EligibilityNoticeCard notice={chat.eligibilityNotice} />
                    )}
                </div>
            </main>
        </div>
    );
}