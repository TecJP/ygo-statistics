<template>
  <div class="flex justify-center items-center text-left px-6 py-6 bg-gray-700">
    <div class="h-screen w-full sm:w-1/3">
      <form @submit.prevent="handleSignIn">
        <h1 class="w-full text-white mt-8 mb-12 sm:mt-4 sm:mb-8 text-2xl">
          Duelist Statistics
        </h1>
        <h2 class="w-full text-white text-4xl">
          Sua Plataforma de ranking de duelos
        </h2>
        <p class="text-white text-lg mt-2 mb-2">
          Acompanhe as suas estatísticas e a de seus amigos.
        </p>
        <h1 class="text-white mt-16 mb-8 sm:mt-6 text-center text-xl">
          Faça seu login
        </h1>
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
            @click="toHome"
            class="
              w-full
              h-12
              rounded-md
              shadow-md
              text-black
              mt-4
              mb-4
              bg-[#BDBDBD]
            "
            :disabled="loading"
          >
            {{ loading ? "Loading" : "Entrar" }}
          </button>
        </div>
        <div class="text-center mt-6 mb-12 sm:mt-4">
          <p>
            Não tenho conta.
            <NuxtLink to="signup" class="text-center text-white mt-8"
              >Criar conta!</NuxtLink
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const loading = ref(false);

const form = ref({
  email: "",
  password: "",
});

async function handleSignIn() {
  try {
    loading.value = true;
    const { email, password } = form.value;
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    router.push("/home");
    return user;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>