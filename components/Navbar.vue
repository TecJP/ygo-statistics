<template>
  <div
    class="
      bg-gray-900
      w-full
      h-20
      sm:w-1/3 sm:h-20
      px-4
      py-4
      flex
      items-center
      justify-between
      fixed
      top-0
    "
  >
    <div class="flex items-center justify-center">
      <img
        src="../assets/images/joao_pedro.jpg"
        alt="João Pedro"
        class="rounded-full w-16 h-16"
      />
      <h1 class="ml-4 text-xl">João Pedro</h1>
    </div>
    <button class="rounded-full bg-gray-300 p-2 text-black" @click="$emit('signOut')">
      Sair
    </button>
  </div>
</template>