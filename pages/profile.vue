<template>
  <div class="flex flex-col items-center w-full h-full px-4 py-4">
    <div class="w-full mt-4 flex justify-between items-center">
      <button @click="navigateToHome">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M447.1 256c0 17.7-13.4 32-31.1 32H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25c-6.3 6.25-14.5 9.35-22.7 9.35s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416c17.7 0 31.1 14.3 31.1 32z"
          ></path>
        </svg>
      </button>
      <h1 class="text-2xl">Meu Perfil</h1>
      <button @click="signOut">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M288 256c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.67 14.3-32 32-32s32 14.33 32 32v224zm-208 0c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4c-13.6-11.3-15.5-31.47-4.2-45.06c11.3-13.59 31.5-15.44 45.1-4.14c52.8 44 86.6 110.4 86.6 183.7C496 388.5 388.5 496 256 496S16 388.5 16 255.1c0-73.3 33.75-139.7 86.6-183.7c13.6-11.3 33.8-9.45 45.1 4.14c10.4 13.59 9.4 33.76-4.2 45.06C104.7 152.9 80 201.6 80 256z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="w-full h-full mt-4 flex flex-col items-center">
      <img
        src="../assets/images/joao_pedro.jpg"
        alt="João Pedro"
        class="rounded-full w-48 h-48 mb-4"
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

function navigateToHome() {
  router.push("/home");
}

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
