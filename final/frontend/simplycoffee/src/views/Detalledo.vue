<template>
<v-container>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - CAFÉ DE COLOMBIA </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café suave de taza limpia, con acidez y cuerpo medio/alto,
                aroma pronunciado y completo, propio del café proveniente
                únicamente de la especie arábiga, cuyas características se deben
                a los factores naturales, así como a los factores humanos de
                sometimiento al proceso de beneficio húmedo, de recolección
                selectiva, con un alto componente manual, a ser cultivado por
                cafeteros de tradición y conocimiento</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 4819 de 4 de marzo de 2005</h4>
            <a
              href="https://drive.google.com/file/d/1IlewvVuOuC4Yn6NlLPKrzro5BfAZY6kA/view?usp=sharing"
              download
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café de Nariño </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café de la especie arábiga, de alta acidez, cuerpo medio, notas
                dulces, limpio, suave y aroma muy pronunciado, que es producido
                en la zona geográfica delimitada, mediante procesos homogéneos
                de recolección manual selectiva, beneficio por la vía húmeda,
                trilla y clasificación manual.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 6093 de 11 de febrero de 2011</h4>
            <a
              href="https://drive.google.com/file/d/1SPs_TcPPfl7q9ZRC6TtZOROWw93ank2V/view?usp=sharing"
              download
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café de Cauca </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café de la especie arábiga, de fragancia y aromas muy fuertes y
                acaramelados, y en taza presenta acidez alta, cuerpo medio,
                impresión global balanceada, limpia, suave con algunas notas
                dulces y florales, que es producido en la zona geográfica
                delimitada, mediante procesos homogéneos.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 41788 de 10 de agosto de 2011</h4>
            <a
              href="https://drive.google.com/file/d/1PyekJlhuAPG-nQN5-uuw8CAwSkTSAYM2/view?usp=sharing"
              download="DO_cafe_de_cauca.pdf"
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café del Huila </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café de la especie arábiga lavado, suave que crece en la zona
                de producción cafetera ya definida, y que, procesado, se
                caracteriza sensorialmente por poseer una impresión global
                balanceada, con notas dulces, acidez y cuerpo medio/alto,
                fragancia/aroma intenso con sensaciones frutales y
                acarameraladas, que es cultivado en la zona geográfica
                delimitada mediante procesos homogéneos.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 17989 de 16 de abril de 2013</h4>
            <a
              href="https://drive.google.com/file/d/14Crymq5N3T5rEoHBtOPVUPHiWMszYMsD/view?usp=sharing"
              download="DO_cafe_de_huila.pdf"
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café de Santander </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café arábigo lavado suave que crece en la zona de producción
                definida, se caracteriza sensorialmente por poseer una taza
                limpia y balanceada con cuerpo medio/alto; acidez media, con
                sabores dulces, herbales, frutales y con ligeras sensaciones
                cítricas. En su fragancia se perciben notas dulces y
                herbales.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 50042 del 25 de agosto de 2014</h4>
            <a
              href="https://drive.google.com/file/d/184hA5FVhcga0DwkosNl-K41XSFI5Ia1y/view?usp=sharing"
              download="DO_cafe_de_santander.pdf"
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café de la Sierra Nevada </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café arábigo lavado suave que crece en la zona de producción
                cafetera específica definida, se caracteriza sensorialmente por
                poseer taza limpia y balanceada con cuerpo medio – alto y
                uniforme; acidez media, con sabores asimilables a chocolate. En
                su fragancia y aroma se perciben notas dulces y anuezadas.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 2484 de 30 de enero de 2017</h4>
            <a
              href="https://drive.google.com/file/d/1nV2mojQS4gK8ffjkhet18QTf8PbCRf1R/view?usp=sharing"
              download="DO_cafe_de_la_sierra_nevada.pdf"
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> DO - Café del Tolima </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open"
                >Café arábigo lavado suave que crece en la zona de producción
                específica definida, se caracteriza sensorialmente por poseer
                taza con acidez y cuerpo medio - alto, limpia, suave, con
                balance y sabores diversos en el espectro de los dulces,
                combinados con sensaciones cítricas y frutales.</span
              >
              <v-row v-else no-gutters style="width: 100%">
                <v-col cols="8"> DETALLES </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-row justify="space-around" no-gutters>
          <v-col cols="3">
            <h4>Resolución SIC 2458 del 30 de enero de 2017</h4>
            <a
              href="https://drive.google.com/file/d/1ImgZ-73JDgAwFhTBtVUEWBDC7x6VTstK/view?usp=sharing"
              download="DO_cafe_del_tolima.pdf"
              >Descargar archivo</a
            >
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</v-container>
</template>
