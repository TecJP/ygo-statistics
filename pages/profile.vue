<template>
  <div
    class="flex flex-col justify-between items-center w-full h-full px-4 py-4"
  >
    <div class="w-full mt-8 flex justify-between items-center">
      <button @click="$emit(router.push('/home'))">Voltar</button>
      <h1 class="text-2xl">Meu Perfil</h1>
      <button @click="signOut">Sair</button>
    </div>
    <div class="w-full h-full flex flex-col items-center justify-center">
      <img
        src="../assets/images/joao_pedro.jpg"
        alt="João Pedro"
        class="rounded-full w-48 h-48 mb-4"
        @click="$emit(router.push('/profile'))"
      />
      <input
        class="w-full h-12 text-black mb-4 rounded-md shadow-md px-4"
        type="text"
        v-model="user.user_metadata.user_name"
      />
      <input
        class="w-full h-12 text-black mb-4 rounded-md shadow-md px-4"
        type="email"
        v-model="user.email"
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
const user = supabase.auth.user();

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
