import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const EarningsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Total Earnings</Text>
      <AnimatedCircularProgress
        size={wp('40%')}
        width={wp('5%')}
        fill={94.5}
        tintColor="#e4002b"
        backgroundColor="#f3f3f3"
      >
        {
          (fill) => (
            <View style={styles.progressContent}>
              <Text style={styles.circularTitle}>Ghs1890.20</Text>
              <Text style={styles.circularSubtitle}>Total Net</Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
      <View style={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Text style={styles.detailHeader}>Hours</Text>
          <Text style={styles.detailValue}>-</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.detailHeader}>Trips</Text>
          <Text style={styles.detailValue}>50/67</Text>
          <Text style={styles.detailSubtext}>Completed/Total Request</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    paddingTop: hp('3%'),
  },
  backButton: {
    position: 'absolute',
    left: wp('2.5%'),
    top: hp('1.5%'),
    zIndex: 1,
  },
  backButtonText: {
    fontSize: hp('3%'),
    color: '#000',
  },
  header: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp('1%'),
  },
  progressContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularTitle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  circularSubtitle: {
    fontSize: hp('2%'),
    color: '#555',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('80%'),
    marginTop: hp('5%'),
  },
  detailBox: {
    width: wp('35%'),
    height: hp('10%'),
    backgroundColor: '#ddd',
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp('1%'),
  },
  detailHeader: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginTop: hp('1%'),
  },
  detailSubtext: {
    fontSize: hp('1.5%'),
    color: '#555',
  },
});

export default EarningsScreen;