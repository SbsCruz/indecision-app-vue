import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNoResp } from '@/interfaces/yes-no-response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResp;

    return data;
  };

  // función para manejar mensaje enviado
  const onNewMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      sent: true,
      message: text,
    });
    // chequear si termina con ?
    if (!text.endsWith('?')) return;

    await sleep;

    const { answer, image } = await getResponse();

    messages.value.push({
      id: new Date().getTime(),
      sent: false,
      message: answer,
      image,
    });
  };
  return {
    //Props
    messages,

    //Methods
    onNewMessage,
  };
};
