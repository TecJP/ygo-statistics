<template>
  <div
    class="
      h-screen
      flex
      justify-center
      items-center
      sm:w-full sm:h-screen
      text-left
      px-6
      py-6
      bg-gray-700
    "
  >
    <div class="h-full w-full sm:w-1/3">
      <form @submit.prevent="handleSignUp">
        <h1 class="w-full text-white mt-8 mb-12 sm:mt-4 sm:mb-8 text-2xl">
          Duelist Statistics
        </h1>
        <h2 class="w-full text-white text-4xl">
          Crie sua conta para comecar o ranking
        </h2>
        <h1 class="text-white mt-16 mb-4 sm:mt-6 text-center text-xl">
          Crie sua conta
        </h1>
        <input
          class="w-full h-12 text-black mb-4 rounded-md shadow-md px-4"
          type="text"
          placeholder="Nome"
          v-model="form.userName"
        />
        <input
          class="w-full h-12 text-black mb-4 rounded-md shadow-md px-4"
          type="email"
          placeholder="Email"
          v-model="form.email"
        />
        <input
          class="w-full h-12 text-black mb-4 rounded-md shadow-md px-4"
          type="password"
          placeholder="Senha"
          v-model="form.password"
        />
        <div>
          <button
            type="submit"
            class="
              w-full
              h-12
              rounded-md
              shadow-md
              text-black
              mt-4
              mb-6
              bg-gray-200
            "
            :disabled="loading"
          >
            {{ loading ? "Loading" : "Criar Conta" }}
          </button>
        </div>
        <div class="text-center mt-6 mb-12 sm:mt-4">
          <NuxtLink to="/" class="text-center text-white mt-8">
            Voltar para entrar
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

// const { logUp, createUser } = useAuthUser();

const form = ref({
  email: "",
  userName: "",
  password: "",
});
const loading = ref(false);

// async function handleSubmit() {
//   try {
//     loading.value = true;
//     await logUp(form.value);
//     await createUser(form.value);
//     router.push("/");
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     loading.value = false;
//   }
// }
</script>