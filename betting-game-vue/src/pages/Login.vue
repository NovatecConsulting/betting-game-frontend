<template>
  <div class="h-full w-screen grid items-center mt-0 md:mt-1/12">
    <div class="md:w-1/2 w-full md:px-16 py-8 px-4 shadow-xl rounded grid items-center md:mx-auto">
      <span class="my-12 text-4xl font-bold">Login</span>
      <input
        class="w-full h-12 bg-gray-200 px-10 mb-4 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 appearance-none outline-none border-2 border-gray-200"
        type="text"
      />
      <input
        class="w-full h-12 bg-gray-200 px-10 mb-4 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 appearance-none outline-none border-2 border-gray-200"
        type="password"
      />
      <button
        class="login__button p-2 h-12 w-24 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold outline-none select-none"
      >
        Log in
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
