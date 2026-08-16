// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "NativeHelper",
    platforms: [.macOS(.v13)],
    targets: [
        .executableTarget(
            name: "NativeHelper",
            path: "Sources/NativeHelper"
        )
    ]
)
