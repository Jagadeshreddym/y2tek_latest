import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import CoreLocation

@main
class AppDelegate: RCTAppDelegate {
  var locationManager: CLLocationManager!
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "y2tek"
    self.dependencyProvider = RCTAppDependencyProvider()
    locationManager = CLLocationManager()
    locationManager.delegate = self
    locationManager.requestWhenInUseAuthorization()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
   // RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    URL(string: "http://192.168.1.15:8081/index.bundle?platform=ios")
   // http://<your-ip-address>:8081/index.bundle?platform=ios
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
} 


extension AppDelegate:CLLocationManagerDelegate{
  func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
          if status != .authorizedWhenInUse {return}
          locationManager.desiredAccuracy = kCLLocationAccuracyBest
          locationManager.startUpdatingLocation()
          let locValue: CLLocationCoordinate2D = manager.location!.coordinate
          print("locations = \(locValue.latitude) \(locValue.longitude)")
      }
}
