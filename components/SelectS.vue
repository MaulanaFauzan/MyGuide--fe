<template>
  <div>
    <label :for="id">{{ label }}</label>
    <div class="relative">
      <button
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        :aria-haspopup="isOpen"
        :id="id"
      >
        {{ selectedOption.label }}
      </button>

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-show="isOpen"
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <input
              v-model="searchTerm"
              @input="filterOptions"
              type="text"
              class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Search..."
            />

            <div v-for="option in filteredOptions" :key="option.value">
              <button
                @click="selectOption(option)"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-800"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      id: `select-${Math.random().toString(36).substring(7)}`,
      isOpen: false,
      searchTerm: '',
      selectedOption: {},
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option =>
        option.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = 'scaleY(0)';
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = 'transform 150ms';
      el.style.transform = 'scaleY(1)';
      done();
    },
    leave(el, done) {
      el.style.transition = 'transform 150ms';
      el.style.transform = 'scaleY(0)';
      done();
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.searchTerm = '';
    },
    filterOptions() {
      // This method is triggered on input change to filter the options
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>