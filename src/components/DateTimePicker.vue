/* eslint-disable no-unused-vars */
<template>
  <input type="text" class="form-control" />
</template>

<script>
import jQuery from "jquery";
import moment from "moment";
import "../assets/plugins/bootstrap-datetimepicker";
export default {
  mounted() {
    const el = this.$el;
    jQuery(el).datetimepicker({ yearOffset: 543, locale: moment.locale("th") });
  },
};
</script>

<style></style>
