function updateTotal(id, extraPrice) {
  // Updating each price field with the related button
  document.getElementById(id).innerText = extraPrice;

  // Targeting the value price
  const extraMemoryCost =
    document.getElementById("extra-memory-cost").innerText;
  const extraStorageCost =
    document.getElementById("extra-storage-cost").innerText;
  const extraDeliveryCost = document.getElementById(
    "extra-delivery-cost"
  ).innerText;

  // Calculating Total
  const total =
    parseFloat(extraMemoryCost) +
    parseFloat(extraStorageCost) +
    parseFloat(extraDeliveryCost) +
    1299;

  // Uptating Total fields
  document.getElementById("total").innerText = total;
  document.getElementById("sub-total").innerText =
    document.getElementById("total").innerText;
}
