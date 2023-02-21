// import {useCallback, useEffect, useMemo, useState} from 'react';
// import RNFetchBlob from 'rn-fetch-blob';

// type TProps = {
//   uri: string;
// };

// type TState = {
//   checking: boolean;
//   fileExists: boolean;
// };
// const {config, fs} = RNFetchBlob;
// const pictureDir = fs.dirs?.PictureDir; // this is the pictures directory. You can check the available directories in the wiki.

// const useFileDownloader = ({uri}: TProps) => {
//   const [state, setState] = useState<TState>({
//     checking: true,
//     fileExists: false,
//   });

//   const filename = useMemo(() => uri.split('/').pop(), [uri]);
//   const path = useMemo(() => pictureDir + `/ripid/${filename}`, [filename]);

//   useEffect(() => {
//     fs.exists(path).then(exist => {
//       setState(prev => ({
//         ...prev,
//         checking: false,
//         fileExists: exist,
//       }));
//     });
//   }, [path]);

//   const handleDownload = useCallback(() => {
//     if (state.fileExists) {
//       return;
//     }
//     let options = {
//       fileCache: true,
//       addAndroidDownloads: {
//         useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
//         notification: true,
//         path,
//         description: 'Downloading image.',
//       },
//     };
//     return config(options).fetch('GET', uri);
//   }, [path, state.fileExists, uri]);
//   return {
//     ...state,
//     handleDownload,
//   };
// };

// export default useFileDownloader;
