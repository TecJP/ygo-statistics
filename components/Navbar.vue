<template>
  <div
    class="
      bg-[#333333]
      w-full
      h-28
      sm:w-1/3 sm:h-20
      px-4
      py-4
      flex
      items-center
      justify-between.user_name
      fixed
      top-0
    "
  >
    <div class="w-full flex items-center justify-between">
      <div>
        <h1 class="text-lg">Seja bem-vindo,</h1>
        <h1 class="text-xl text-[#BDBDBD]">{{ user_metadata.user_name }}</h1>
      </div>
      <img
        src="../assets/images/joao_pedro.jpg"
        alt="João Pedro"
        class="rounded-full w-16 h-16"
        @click="$emit(router.push('/profile'))"
      />
    </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const { user_metadata } = supabase.auth.user();
</script>