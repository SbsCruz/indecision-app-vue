<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>La verdad no sé quien poner...</span>
    </div>

    <!-- Mensajes -->
    <!-- Mensajes del chat -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <!-- Input Message -->
    <MessageBox @send-message="onNewMessage" />
  </div>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import ChatMessages from '@/components/chats/ChatMessages.vue';
import MessageBox from '@/components/chats/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, onNewMessage } = useChat();
</script>
