import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Text style={styles.title}>高总计数器</Text>
      
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={increment}>
        <Text style={styles.addButtonText}>+1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetButtonText}>重置</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 60,
  },
  countContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  count: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    width: 200,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    width: 120,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f093fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});