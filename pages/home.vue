<template>
  <div
    class="
      h-full
      w-full
      flex flex-col
      sm:w-screen sm:h-full
      text-left
      bg-gray-700
    "
  >
    <Navbar @signOut="signOut" />
    <div class="w-full h-full sm:w-1/3 mt-20 sm:h-screen px-4">
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

async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  } catch (error) {
    alert(error.message);
  }
}
</script>