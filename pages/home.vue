<template>
  <div
    class="
      h-full
      w-full
      flex flex-col
      sm:w-screen sm:h-full
      text-left
      py-0
      px-0
      bg-gray-700
    "
  >
    <Navbar />
    <div class="w-full h-full sm:w-1/3 sm:h-screen px-4 mb-6">
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
// const supabase = useSupabaseClient();
const router = useRouter();
// const loading = ref(false);
// const user = useUser();

// console.log(supabase.auth.session());

async function signOut() {
  router.push("/");
}
</script>