<script lang="ts" setup>
import { tasksWithProjectsQueries } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'
import type { TasksWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQueries

  if (error) useErrorStore().setError({error, customCode:status})

  tasks.value = data
}

await getTasks()

</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
