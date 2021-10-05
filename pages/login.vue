<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <button
          class="
            inline-flex
            items-center
            px-4
            py-2
            bg-white
            border border-gray-300
            rounded-md
            font-semibold
            text-xs text-gray-700
            tracking-widest
            shadow-sm
            hover:text-gray-500
            focus:outline-none focus:border-blue-300 focus:shadow-outline-blue
            active:text-gray-800 active:bg-gray-50
            transition
            ease-in-out
            duration-150
          "
          @click="login()"
        >
          Log in via SSO
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith('keycloak')
    },
  },
}
</script>
