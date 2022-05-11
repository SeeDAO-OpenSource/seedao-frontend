import { ethers } from "ethers";
import { abi } from "@/api/SeeDAO.json";
import { abi_new } from "@/api/SeeDAONew.json";
import { whitelist4 } from "@/data/whitelist/treeFinal4.json";
import { whitelist5 } from "@/data/whitelist/treeFinal5.json";
// Notice： 白名单的key必须要小写

// const whiteListArray = [{}, {}, whitelist2, whitelist3]; //dictionary of whitelist
const whiteListArray = [{}, {}, {}, {}, whitelist4, whitelist5];
let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
/**
 * @description 判断当前地址是否在白名单并返回在第几批（0代表不在）
 * @param {string} address 
 * @returns {num} 0-不在白名单  4-在第四批白
 */
function checkIsInWhitelist(address) {
    let answer = 0;
    if (address) {
        address = address.toLocaleLowerCase();
        let index = whiteListArray.findIndex((wl) => {
            return Object.keys(wl).includes(address.toLocaleLowerCase())
        })
        if (index > 3) {
            answer = index
        }
    }
    return answer;
}
/**
 * @description 通过在白名单的批次，mintnft
 * @param {string} address 
 * @param {num} batchId 
 */
async function mintWhitelistByBatchId(address, batchId) {
    if (batchId === 4) {
        if (address) {
            address = address.toLocaleLowerCase();
            let proof = whiteListArray[batchId][address];
            let contractAddress = process.env.VUE_APP_SEEDAO_ADDRESS;
            let contactSD_signer = new ethers.Contract(
                contractAddress,
                abi,
                provider.getSigner()
            );
            return await contactSD_signer.mintWhiteList(batchId - 3, proof);
        }
        else {
            return [];
        }
    } else if (batchId === 5) {
        if (address) {
            address = address.toLocaleLowerCase();
            let proof = whiteListArray[batchId][address];
            let newContractAddress = process.env.VUE_APP_SEEDAO_NEW;
            let contactSD_signer_new = new ethers.Contract(
                newContractAddress,
                abi_new,
                provider.getSigner()
            );
            return await contactSD_signer_new.mintWhiteList(batchId, proof);
        }
    }
}

export { checkIsInWhitelist, mintWhitelistByBatchId };