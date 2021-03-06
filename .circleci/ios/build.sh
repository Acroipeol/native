set -e
set -o pipefail

mkdir -p tmp/logs

BUILD_CONFIGURATION=${BUILD_CONFIGURATION:-Debug}

buildArgs=()
buildScheme=EmCasa

if [[ ! -z "$IOS_XCCONFIG_FILE" ]]; then buildArgs+=(-xcconfig "$IOS_XCCONFIG_FILE"); fi
if [[ $BUILD_CONFIGURATION == "Beta" ]]; then
    export BUNDLE_IDENTIFIER_SUFFIX="-beta"
    buildScheme=EmCasa-Beta
fi

cd ios && xcodebuild \
  -scheme $buildScheme \
  -archivePath build/EmCasa.xcarchive \
  -workspace EmCasa.xcworkspace \
  -configuration $BUILD_CONFIGURATION \
  -destination "generic/platform=iOS" \
  ${buildArgs[*]} \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGN_IDENTITY="" \
  clean archive | tee ../tmp/logs/ios.build.log | xcpretty
