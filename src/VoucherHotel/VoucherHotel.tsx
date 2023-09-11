import { Icon } from "@rneui/base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import TabNavigator from "../components/TabNavigator";
import RNFetchBlob from 'rn-fetch-blob';

const VoucherHotel = (props: any) => {
    const handleDownloadPDF = async () => {
        const pdfUrl = 'https://example.com/path-to-your-pdf.pdf';
        
        try {
          const response = await RNFetchBlob.config({
            fileCache: true,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true,
              path: RNFetchBlob.fs.dirs.DownloadDir + '/your-pdf-file.pdf', // Gantilah dengan nama yang sesuai
            },
          }).fetch('GET', pdfUrl);
    
          // Pemberitahuan bahwa unduhan berhasil
          console.log('Unduhan berhasil:', response.path());
        } catch (error) {
          console.error('Terjadi kesalahan saat mengunduh:', error);
        }
      };
  console.log(props.navigation);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <View style={styles.iconContainer}>
              <Icon
                name="left"
                type="antdesign"
                size={35}
                color={"#000"}
                style={{ marginTop: 15 }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Voucher Hotel
            </Text>
          </View>
        </View>
        <Text
          style={{ fontSize: 23, fontWeight: "bold", marginHorizontal: 25 }}
        >
          Detail Voucher Hotel
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 15,
            elevation: 8,
            height: 650,
            backgroundColor: "#fff",
            marginHorizontal: 25,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Invoice Number SGT20230404-7950-0004{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>
            Order Time : Nov 21, 2023 15 : 00{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
            The Kleep Jungle Resort{" "}
          </Text>
          <Text style={{ fontSize: 16, color: "#7B7B7B" }}>
            Nusa Penida Bali{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 15 }}>
            Check in : 22 November 2023{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 15 }}>
            Check out : 24 November 2023{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 15 }}>
            Booking Detail{" "}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>Type Double Room </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>Qty 1,2 Night </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>Breakfast Include </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
            Guest Name
          </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>
            Anwar Alimuda Lubis
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
            Special Request
          </Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>No - Smoking Room</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 30,
              textAlign: "right",
            }}
          >
            Booking Status{" "}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              fontWeight: "bold",
              color: "#21BB9B",
              textAlign: "right",
              right: 13,
            }}
          >
            CONFIRMED
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 30,
                textDecorationLine: "underline",
                color: "#5D77FE",
              }}
            >
              Download PDF
            </Text>
            <Icon name="download" type="antdesign" size={20} style={{ marginTop: 29, marginLeft: 10 }}/>
          </View>
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 25,
    marginBottom: 16,
  },
});
export default VoucherHotel;
