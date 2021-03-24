<template>
  <div class="container">
    <div>
      <div class="form-group">
        <label for="testDate">Test Date</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="value"
          class="mb-2"
        ></b-form-datepicker>
      </div>
      <div class="form-group" style="position: relative">
        <label for="testDate">Test Date</label>
        <DateTimePicker></DateTimePicker>
      </div>
    </div>
  </div>
</template>

<script>
import DateTimePicker from "./DateTimePicker";
export default {
  components: {
    DateTimePicker,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
