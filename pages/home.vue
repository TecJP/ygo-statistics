<template>
  <div
    class="
      h-full
      w-full
      flex flex-col
      sm:w-full sm:h-screen
      text-left
      bg-gray-700
      p-0
      m-0
    "
  >
    <Navbar />
    <div
      class="w-full h-full sm:w-full mt-24 sm:mt-28 sm:h-screen px-4 sm:px-24"
    >
      <Statistics />
      <Card
        deckImage="../assets/images/balerdroch.png"
        deckName="Zombie"
        :wins="30"
        :loses="15"
      />
      <Card
        deckImage="../assets/images/dark_magician.png"
        deckName="Dark Magician"
        :wins="5"
        :loses="15"
      />
      <Card
        deckImage="../assets/images/judgment.png"
        deckName="Lightsworn"
        :wins="20"
        :loses="10"
      />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
const supabase = useSupabaseClient();
const router = useRouter();
</script>