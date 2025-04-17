<script setup>
import { computed, ref } from 'vue';

// Variable reactiva para el sueldo mensual
const SueldoMensual = ref(0);

// Cálculos dinámicos usando computed
const SueldoPorHora = computed(() => SueldoDiario.value / 8);
const SueldoDiario = computed(() => SueldoMensual.value / 30);
const SueldoQuincenal = computed(() => SueldoDiario.value * 15);

const resultado = computed(() => [
    {
        SalarioHora: SueldoPorHora.value,
        SalarioDia: SueldoDiario.value,
        SalarioQuincenal: SueldoDiario.value * 15,
        SalarioMensual: SueldoMensual.value,
    },
]);

const formatCurrency = (value) => {
    return value.toLocaleString('es-VE', { style: 'currency', currency: 'VES' });
};
</script>

<template>
    <div class="card">
        <div class="flex-auto">
            <label for="stacked-buttons" class="mb-2 block font-bold"> Sueldo Mensual </label>
            <InputNumber v-model="SueldoMensual" inputId="stacked-buttons" showButtons mode="currency" currency="VES" fluid />
        </div>
        <DataTable :value="resultado" sortField="SalarioMensual" tableStyle="min-width: 50rem">
            <Column field="SalarioHora" header="Salario x Hora" style="width: 20%">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.SalarioHora) }}
                </template>
            </Column>

            <Column field="SalarioDia" header="Salario x Día" style="width: 20%">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.SalarioDia) }}
                </template>
            </Column>

            <Column field="SalarioQuincenal" header="Salario Quincenal (15 Días)" style="width: 20%">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.SalarioQuincenal) }}
                </template>
            </Column>

            <Column field="SalarioMensual" header="Salario Mensual (30 Días)">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.SalarioMensual) }}
                </template>
            </Column>
        </DataTable>
    </div>
</template>
