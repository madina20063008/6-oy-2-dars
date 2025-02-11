
import './App.css';
import {Salomlashish} from './Components/Salomlashish'
import {ShaharlarRoyxati} from './Components/ShaharlarRoyxati'
import {Mahsulot} from './Components/MahsulotNarxi'
import {Hisoblash} from './Components/Matematika'
import {RangliMatn} from './Components/InlineStyle'
import {Qiymat} from './Components/Boolean'
import {Obuna} from './Components/Button'
import {Til} from './Components/Til'
import {UzunIsmlar} from './Components/Filterlash'
import {RasmKorsatish} from './Components/Rasm'
import {AktivTugma} from './Components/ButtonColor'
import {Obyekt} from './Components/Obyekt'
import {RaqamTekshiruv} from './Components/ShartliRaqam'



function App() {
  return (
    <div className="App">

      {/* 1 */}
      <Salomlashish/>

      {/* 2 */}
      <Mahsulot/>

      {/* 3 */}
      <ShaharlarRoyxati/>

      {/* 4 */}
      <Hisoblash/>

      {/* 5 */}
      <RangliMatn/>

      {/* 6 */}
      <Qiymat/>

      {/* 7 */}
      <Obuna/>

      {/* 8 */}
      <Til/>

      {/* 9 */}
      <UzunIsmlar/>

      {/* 10 */}
      <RasmKorsatish/>

      {/* 11 */}
      <AktivTugma/>

      {/* 12 */}
      <Obyekt/>

      {/* 13 */}
      <RaqamTekshiruv/>
    </div>
  );
}

export default App;
