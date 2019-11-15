<template>
  <div class="m-5" id="app">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Kérem a neved</span>
      </div>
      <input type="text" class="form-control" v-model="nev" />
    </div>

    <h1>Hello {{ nev }}{{ felkialtojelek }}</h1>
    <p>Felkiáltójelek száma: {{ felkialtojelDarab }}</p>
    <button type="button" class="btn m-2 btn-success" :disabled="felkialtojelDarab == 10" v-on:click="onClick('+')">
      Plus
    </button>
    <button type="button" class="btn btn-danger" :disabled="felkialtojelDarab == 1" v-on:click="onClick('-')">
      Minus
    </button>
    <ol>
      <li v-for="nap in napok" :key="nap">{{ nap }}</li>
    </ol>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Kérem a nap nevét</span>
      </div>
      <input type="text" class="form-control" v-model="inputNap" />
    </div>

    <button type="button" class="btn mr-2 btn-success" :disabled="!joNapHozzadni(iNap)" @click="hozzadNap()">
      Nap hozzáadása
    </button>
    <button type="button" class="btn btn-danger" :disabled="!joNapTorolni(iNap)" @click="torolNap()">
      Nap törlése
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorldPlus extends Vue {
  private felkialtojelDarab: number;
  private nev: string;
  private felkialtojelek: string;
  private napok = ["hétfő", "kedd", "szerda"];
  private inputNap: string;

  public constructor() {
    super();
    this.felkialtojelDarab = 3;
    this.nev = "Jedlik Ányos";
    this.felkialtojelek = "!!!";
    this.inputNap = "";
  }

  private onClick(művelet: string): void {
    if (művelet === "+" && this.felkialtojelDarab < 10) {
      this.felkialtojelDarab++;
    } else if (művelet === "-" && this.felkialtojelDarab > 1) {
      this.felkialtojelDarab--;
    }
  }

  private joNapHozzadni(nap: string): boolean {
    const joNapok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    return joNapok.includes(nap) && !this.napok.includes(nap);
  }

  private hozzadNap(): void {
    this.napok.push(this.inputNap.toLowerCase());
    this.inputNap = "";
  }

  private joNapTorolni(nap: string): boolean {
    return this.napok.includes(nap);
  }

  private torolNap(): void {
    this.napok = this.napok.filter(i => i !== this.iNap);
    this.inputNap = "";
  }

  // computed
  private get iNap(): string {
    return this.inputNap.toLowerCase();
  }

  @Watch("felkialtojelDarab")
  private onNumChanged() {
    this.felkialtojelek = "!".repeat(this.felkialtojelDarab);
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
