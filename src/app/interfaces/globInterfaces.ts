
interface Settings {
    opsNotify: number;
    opsHistory: number;
    alarmNotify: number;
    wxAlarmNotify: number;
    wxOpsNotify: number;
    wxDoorbellNotify: number;
    appDoorbellNotify: number;
}

interface Family {
    id: string;
    index: number;
}

interface Extra2 {
    uiid: number;
    description: string;
    brandId: string;
    apmac: string;
    mac: string;
    ui: string;
    modelInfo: string;
    model: string;
    manufacturer: string;
    chipid: string;
    staMac: string;
}

interface Extra {
    extra: Extra2;
    _id: string;
}

interface BindInfos {
    gaction: string[];
}

interface OnlyDevice {
    ota: string;
}

interface Params {
    bindInfos: BindInfos;
    version: number;
    sledOnline: string;
    switch: string;
    fwVersion: string;
    rssi: number;
    staMac: string;
    startup: string;
    init: number;
    pulse: string;
    pulseWidth: number;
    only_device: OnlyDevice;
    ssid: string;
    bssid: string;
}

interface Tags {
    m_3417_benj: string;
}

interface DevConfig {
}

interface IRootObject {
    settings: Settings;
    family: Family;
    group: string;
    online: boolean;
    shareUsersInfo: any[];
    groups: any[];
    devGroups: any[];
    _id: string;
    name: string;
    type: string;
    deviceid: string;
    apikey: string;
    extra: Extra;
    params: Params;
    createdAt: Date;
    __v: number;
    onlineTime: Date;
    ip: string;
    location: string;
    offlineTime: Date;
    deviceStatus: string;
    tags: Tags;
    sharedTo: any[];
    devicekey: string;
    deviceUrl: string;
    brandName: string;
    showBrand: boolean;
    brandLogoUrl: string;
    productModel: string;
    devConfig: DevConfig;
    uiid: number;

    login(): Function,
    openWebSocket(callback: (data: {}) => void): Function,
    getDevices(): any,
    getDevice(deviceId: string):Function,
    getDevicePowerState(deviceId: string, channel?: number):Function,
    setDevicePowerState(deviceId: string, state?: string, channel?: number): Function,
    toggleDevice(deviceId: string, channel?: number): Function,
    getDevicePowerUsage(deviceId: string): Function,
    getDeviceCurrentTH(deviceId: string): Function,
    getDeviceCurrentTemperature(deviceId: string):Function,
    getDeviceCurrentHumidity(deviceId: string):Function,
    getDeviceChannelCount(deviceId: string): Function,
    getFirmwareVersion(deviceId: string): Function,
}

export  { IRootObject }
