import React from 'react';
import { View,Text, StyleSheet, SafeAreaView } from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';

const CandlesChart = (data) => {

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CandlestickChart.Provider data={data}>
            <CandlestickChart style={styles.chart}>
              <CandlestickChart.Candles 
                positiveColor="#00C853"  
                negativeColor="#D32F2F"  
              />
              <CandlestickChart.Crosshair />
            </CandlestickChart>

          
            <View>
            <View style={styles.priceInfo}>
              <View style={styles.priceRow}>
                <View >
              <Text style={styles.labelText}>Open</Text>
                <CandlestickChart.PriceText style={styles.priceText} precision={2} type="open" />
              <Text style={styles.labelText}>High</Text>
                <CandlestickChart.PriceText style={styles.priceText} precision={2} type="high" />
                </View>
              </View>
              <View style={styles.priceRow}>
              <Text style={styles.labelText}>Low</Text>
                <CandlestickChart.PriceText style={styles.priceText} precision={2} type="low" /> 
                <Text style={styles.labelText}>Close</Text>
                <CandlestickChart.PriceText style={styles.priceText} precision={2} type="close" />
              </View>
              <CandlestickChart.DatetimeText style={styles.dateText} />
            </View>
        </View>
        </CandlestickChart.Provider>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTag:{
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 4, 
  },
  chart: {
    height: 300,
    width: '95%',
  },
  priceInfo: {
    marginTop: 10,
    alignItems: 'flex-start', 
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  priceRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333', 
    marginRight: 15, 
  },
  labelText: {
    fontSize: 14,
    color: '#666',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default CandlesChart;