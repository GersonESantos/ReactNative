import { useState, useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  const valoInicial = 25 * 60 * 1000; // 25 minutos em milissegundos
  const [timeLeft, setTimeLeft] = useState(valoInicial);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLabel, setTimeLabel] = useState("Começar");

  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const now = Date.now();
      startTimeRef.current = now;
      const endTime = now + timeLeft;

      intervalRef.current = setInterval(() => {
        const current = Date.now();
        const remaining = endTime - current;

        if (remaining <= 0) {
          setTimeLeft(0);
          clearInterval(intervalRef.current);
          setIsRunning(false);
          setTimeLabel("Começar");
        }else{
          setTimeLeft(remaining);
        }
      }, 50); // atualiza a cada 50ms, suave e leve
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const milis = String(ms % 1000).padStart(3, "0");
    return `${minutes}:${seconds}:${milis}`;
  }

  function startTimer() {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
      setTimeLabel("Stop");
    } else {
      setIsRunning(false);
      setTimeLabel("Começar");
    }
  }

  return (
    <View style={style.container}>
      <Image source={require('./relogio.png')} />
      <View style={style.acttions}>
        <Text style={style.timer}>{formatTime(timeLeft)}</Text>
        <Pressable
          style={isRunning ? style.buttonStop : style.buttonStart}
          onPress={startTimer}
        >
          <Text style={style.textButton}>{timeLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  acttions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: 'center',
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStart: {
    padding: 24,
    backgroundColor: '#021123',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  },
  buttonStop: {
    padding: 24,
    backgroundColor: '#990000',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  },
  textButton: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
