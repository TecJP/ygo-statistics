<script setup lang="ts">
interface CardData {
  deckName: string;
  deckImage: string;
  wins: number;
  loses: number;
}

const { deckImage, deckName, wins, loses } = defineProps<CardData>();

function sumValues(wins, loses) {
  return wins + loses;
}
</script>
<template>
  <div
    class="
      w-full
      bg-gray-200
      text-black
      mt-4
      mb-4
      rounded-xl
      flex flex-row
      items-center
    "
  >
    <img class="w-18 h-32 rounded-l-xl" :src="deckImage" :alt="deckName" />
    <table class="w-full sm:w-full m-2">
      <tr>
        <td>Deck:</td>
        <td class="text-right">{{ deckName }}</td>
      </tr>
      <tr>
        <td>Vitórias:</td>
        <td class="text-right">{{ wins }}</td>
      </tr>
      <tr>
        <td>Derrotas:</td>
        <td class="text-right">{{ loses }}</td>
      </tr>
      <tr>
        <td>Duelos:</td>
        <td class="text-right">{{ sumValues(wins, loses) }}</td>
      </tr>
    </table>
  </div>
</template>