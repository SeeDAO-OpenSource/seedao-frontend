import { ethers } from "ethers";
import { abi_new } from "@/api/SeeDAONew.json";
import whitelist10_7 from "@/data/whitelist/treeFinal_10_7.json";

// Notice： 白名单的key必须要小写

// const whiteListArray = [{}, {}, whitelist2, whitelist3]; //dictionary of whitelist
const whiteListArray = [whitelist10_7]

const SGN_ADDRESS = '0x883555EBb9eDF7b4c448387A4E3114418A130D55';

/**
 * @description 判断当前地址是否在白名单并返回在第几批（0代表不在）
 * @param {string} address 
 * @returns {num} 0-不在白名单  4-在第四批白
 */
function checkIsInWhitelist(address) {
    let batchId = 0;
    if (address) {
        address = address.toLocaleLowerCase();
        whiteListArray.forEach((wl) => {
            const whitelist = Object.keys(wl.whitelist);
            let index = whitelist.findIndex((addr) => {
                return addr.toLocaleLowerCase() === address
            })
            if (index >= 0) {
                batchId = wl.key
            }
        })
    }
    return batchId;
}
/**
 * @description 通过在白名单的批次，mintnft
 * @param {string} address 
 * @param {num} batchId 
 */
async function mintWhitelistByBatchId(address, batchId) {
    return new Promise((resolve, reject) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        if (address) {
            address = address.toLocaleLowerCase();
            let proof = [];
            whiteListArray.forEach((wl) => {
                const whitelist = Object.keys(wl.whitelist);
                let index = whitelist.findIndex((addr) => {
                    return addr.toLocaleLowerCase() === address
                })
                if (index >= 0) {
                    proof = wl.whitelist[whitelist[index]];
                }
            })
            let contactSD_signer_new = new ethers.Contract(
                SGN_ADDRESS,
                abi_new,
                provider.getSigner()
            );
            contactSD_signer_new.mintWhiteList(batchId, proof).then((tx) => {
                    resolve(tx);
            }).catch(({ error }) => {
                reject(error.message + ` (proof=${JSON.stringify(proof)})`);
            });
        }
    });
}

export { checkIsInWhitelist, mintWhitelistByBatchId };