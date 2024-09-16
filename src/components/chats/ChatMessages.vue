<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- MessageBubble -->
      <MessageBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script lang="ts" setup>
import MessageBubble from './MessageBubble.vue';
import type { ChatMessage } from '../../interfaces/chat-message-interface';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

// para observar el comportamiento de algo
watch(props.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
