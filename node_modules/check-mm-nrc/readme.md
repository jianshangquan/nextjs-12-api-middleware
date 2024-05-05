### Check MM NRC
Myanmar NRC Checker 

```javascript
const result = checkMyanmarNRC('12/LaMaTa(N)123456')
/**
 * 
 * {
 *      type:  N
 *      typeInLetter: 'C' | 'A' | 'NAT'
 *      number: 123456
 *      township: LaMaTa
 *      state: 12
 *      isValid: true
 *      defination: {
*           "id": "255",
*           "name_en": "LaMaTa",
*           "name_mm": "(လမတ) လမ်းမတော်",
*           "nrc_code": "12",
*           "created_at": "2019-01-31 20:03:06",
*           "updated_at": "2019-01-31 20:03:24"
*       },
 * }
 * 
*/
```






#### getNRCTownshipByState()

Get Township by states

```javascript
const townships = getNRCTownshipByState(12);
/**
 * 
 * [
 *      {
 *          "id": "255",
 *          "name_en": "LaMaTa",
 *          "name_mm": "(လမတ) လမ်းမတော်",
 *          "nrc_code": "12",
 *          "created_at": "2019-01-31 20:03:06",
 *          "updated_at": "2019-01-31 20:03:24"
 *      },
 *      {
 *          "id": "231",
 *          "name_en": "AaLaNa",
 *          "name_mm": "(အလန) အလုံ",
 *          "nrc_code": "12",
 *          "created_at": "2019-01-31 20:03:06",
 *          "updated_at": "2019-01-31 20:03:06"
 *      },
 *      ...
 * ]
 * 
 * */    
```





#### getStates()
Get states

```javascript
const states = getStates();
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```


