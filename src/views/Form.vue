<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <form
        class="card"
        @submit.prevent="submit"
      >
        <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
        <label class="block mb-6">
          <span class="form-label mb-2">Email Address</span>
          <input
            v-model="email"
            class="form-input"
            placeholder="you@example.com"
          >
        </label>
        <div class="mb-6">
          <span class="form-label mb-2">Newsletter</span>
          <div class="flex justify-between items-center">
            <p class="mr-4">Send you occasional news and updates.</p>
            <toggle-input v-model="receiveNewsletter"/>
          </div>
        </div>
        <label class="block mb-8">
          <span class="form-label mb-2">Select a date</span>
          <date-picker
            v-model="date"
            :options="{ firstDay: 1 }"
            format="MMM D YYYY"
          />
        </label>
        <div class="flex justify-between">
          <delete-account-button
            :account-id="accountId"
            class="btn btn-red btn-with-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ><path 
              d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
            /></svg>
            Cancel Account
          </delete-account-button>
          <button
            type="submit"
            class="btn btn-blue"
          >Update Settings</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker.vue';
import ToggleInput from '@/components/ToggleInput.vue';
import DeleteAccountButton from '@/components/DeleteAccountButton.vue';

export default {
  components: {
    ToggleInput,
    DatePicker,
    DeleteAccountButton
  },
  data() {
    return {
      email: 'jane@example.com',
      receiveNewsletter: false,
      date: 'Sep 27 2018',
      accountId: 7
    };
  },
  methods: {
    submit() {
      /* eslint-disable-next-line no-console */
      console.log('Submitting preferences...', {
        email: this.email,
        receiveNewsletter: this.receiveNewsletter,
        date: this.date
      });
    }
  }
};
</script>
