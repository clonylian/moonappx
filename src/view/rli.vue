<template>
  <div v-show="rli" class="rlibox">
    <div class="calendar">
      <div class="header">
        <button style="background: transparent;" @click="prevMonth">
          <svg style="width: 25px; height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z">
            </path>
          </svg>
        </button>
        <span>{{ currentMonth }}</span>
        <button style="background: transparent;" @click="nextMonth">
          <svg style="width: 25px; height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z">
            </path>
          </svg>
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th style="background: transparent;" v-for="day in daysOfWeek" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rqi" v-for="week in weeks" :key="week">
              <td v-for="date in week" :key="date" @click="selectDate(date, $event)">
                {{ date }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="rliqc">
          <p @click="out">确认</p>
          <p @click="out">取消</p>
        </div>
      </div>
    </div>
  </div>
  <input ref="dateInput" v-model="selectedDateString" placeholder="DD/MM/YYYY" />
  <button @click="dakai">打开</button>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const rli = ref(false);
const currentDate = ref(new Date());
const selectedDate = ref(null);

const currentMonth = computed(() => {
  const options = { month: 'long', year: 'numeric' };
  return currentDate.value.toLocaleDateString('en-US', options);
});

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const selectedDateString = computed({
  get: () => {
    if (selectedDate.value) {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth() + 1;
      return `${selectedDate.value} /${month}/${year}`;
    } else {
      return '';
    }
  },
  set: (value) => {
    const parts = value.split('/');
    selectedDate.value = parseInt(parts[0], 10);
  }
});

const weeks = computed(() => {
  const firstDayOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const weeks = [];
  let week = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    week.push('');
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if ((firstDayOfWeek + day - 1) % 7 === 6) {
      weeks.push(week);
      week = [];
    }
  }

  for (let i = lastDayOfWeek + 1; i <= 6; i++) {
    week.push('');
  }

  weeks.push(week);

  return weeks;
});

const dakai = () => {
  rli.value = true;
};

const out = () => {
  rli.value = false;
};
const selectDate = (date, event) => {
  selectedDate.value = date;
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth() + 1;
  const day = date;
  const formattedDate = `${day}/${month}/${year}`;
  event.target.value = formattedDate;
};
const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
};

const isSelected = (date) => {
  if (selectedDate.value !== null) {
    const selected = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), date);
    return selectedDate.value === date;
  }
  return false;
};
</script>
  
<style scoped>
.rlibox {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar {
  width: 90%;
  display: flex;
  border-radius: 15px;
  background-color: white;
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  flex-direction: column;
  text-align: center;
  border-right: 1px black solid;
  margin-right: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: center;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}

td {
  cursor: pointer;
}

.selected {
  background-color: #0099ff;
  border-radius: 15px;
}

.rqi>td:hover {
  background-color: #0099ff;
  border-radius: 15px;
}

.rliqc {
  display: flex;
  justify-content: space-between;
}

.rliqc>p {
  width: 4rem;
  text-align: center;
  line-height: 2rem;
  height: 2rem;
  padding: 0.3rem;
  border-radius: 5px;
  border: 1px black solid;
  margin-top: 2rem;
  background-color: rgb(153, 220, 113);
}
</style>