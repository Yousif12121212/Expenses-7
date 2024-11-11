const budgets = { food: 0, fuel: 0, monthly: 0 };
const remaining = { food: 0, fuel: 0, monthly: 0 };

function setBudget(category) {
  const budgetInput = document.getElementById(`${category}-budget`);
  const budget = parseFloat(budgetInput.value);

  if (!isNaN(budget) && budget > 0) {
    budgets[category] = budget;
    remaining[category] = budget;
    document.getElementById(`remaining-${category}`).textContent = remaining[category];
    alert(`تم تعيين ميزانية ${category} بقيمة ${budget} ريال`);
  } else {
    alert("يرجى إدخال ميزانية صالحة أكبر من 0.");
  }
}

function addExpense(category) {
  const amountInput = document.getElementById(`${category}-amount`);
  const amount = parseFloat(amountInput.value);

  if (budgets[category] === 0) {
    alert(`يرجى تعيين ميزانية لفئة ${category} أولاً قبل إضافة المصروفات.`);
    return;
  }

  if (!isNaN(amount) && amount > 0) {
    if (remaining[category] >= amount) {
      remaining[category] -= amount;
      document.getElementById(`remaining-${category}`).textContent = remaining[category];
      amountInput.value = ''; // تصفير حقل إدخال المصروف بعد الخصم
      alert(`تم خصم ${amount} ريال من ميزانية ${category}. المتبقي: ${remaining[category]} ريال`);
    } else {
      alert(`الميزانية المتبقية غير كافية. المتبقي في ميزانية ${category}: ${remaining[category]} ريال`);
    }
  } else {
    alert("يرجى إدخال مبلغ مصروف صالح أكبر من 0.");
  }
}