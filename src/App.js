/* eslint-disable array-callback-return */
import "./App.css";
import React, { useState } from "react";
import { Container } from "@mui/system";
import Numpad from "./numpad";

function App() {
  const [result, setResult] = useState(null);
  const [array, setArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [process, setProcess] = useState(0);

  const renderSwitch = (param) => {
    switch (param) {
      case 0: {
        setResult([result] + param);
        break;
      }
      case 1: {
        setResult([result] + param);
        break;
      }
      case 2: {
        setResult([result] + param);
        break;
      }
      case 3: {
        setResult([result] + param);
        break;
      }
      case 4: {
        setResult([result] + param);
        break;
      }
      case 5: {
        setResult([result] + param);
        break;
      }
      case 6: {
        setResult([result] + param);
        break;
      }
      case 7: {
        setResult([result] + param);
        break;
      }
      case 8: {
        setResult([result] + param);
        break;
      }
      case 9: {
        setResult([result] + param);
        break;
      }
      default: {
        console.log("def");
      }
    }
  };

  const reset = () => {
    setResult(null);
    setArray([])
    setTotal(null)
  };
  const deletefunction = () => {
    setResult(result.slice(0, -1));
  };
  const addition = () => {
    setArray((array) => [...array, result]);
    setResult(null);
    setProcess(1);
  };
  const extraction = () => {
    setArray((array) => [...array, result]);
    setResult(null);
    setProcess(2);
  };
  const multiplication = () => {
    setArray((array) => [...array, result]);
    setResult(null);
    setProcess(3)
  };
  const division = () => {
    setArray((array) => [...array, result]);
    setResult(null)
    setProcess(4)
  }

  const calculate = () => {
    switch (process) {
      case 1: {
        var toplam = 0;
        array.map((item) => {
          toplam += Number(item);
        });
        toplam += Number(result);
        setTotal(toplam);
        break;
      }
      case 2: {
        const enBuyuk = Math.max(...array);  // en Büyük sayıyı buluyor
        var fark = enBuyuk;
        array.map((item) => {
          fark -= item;
        });
        fark = fark - Number(result);
        fark += enBuyuk;
        setTotal(fark);
        break;
      }
      case 3: {
        var carpım = 1;
        array.map((item) => {
          carpım *= Number(item);
        })
        carpım *= Number(result)
        setTotal(carpım)
        break;
      }
      case 4: {
        const enBuyuk = Math.max(...array);
        var bolum = enBuyuk;
        array.map((item) => {
          bolum /= item
        })
        bolum /= Number(result)
        bolum *= enBuyuk
        setTotal(bolum)
        break;
      }
      default: {
        console.log("deff =");
      }
    }
  };
  console.log('deneme')

  return (
    <div className="App">
      <header className="header">Calculator</header>
      <Container className="Main" maxWidth="md" fixed={true}>
        <p className="UpperResultArray">{" " + array + " "}</p>
        <p className="Result">{result}</p>
        {total === 0 ? null : <p className="Total">{total}</p>}
      </Container>
      <Numpad
        reset={reset}
        calculate={calculate}
        renderSwitch={renderSwitch}
        deletefunction={deletefunction}
        addition={addition}
        extraction={extraction}
        multiplication={multiplication}
        division={division}
      />
    </div>
  );
}

export default App;
