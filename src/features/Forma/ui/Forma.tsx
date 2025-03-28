import styles from "./Forma.module.scss";
import { useFormHandler } from "shared/hooks/useFormaHandler";
import { Button, ButtonTheme, Icon, IconType, Loader } from "shared/ui";
import { FormaSuccess } from "./FormaSucces";
import { IMaskInput } from "react-imask";
import { Controller } from "react-hook-form";

export function Forma() {
  const {
    register,
    handleSubmit,
    onSubmit,
    control,
    loading,
    isSubmitted,
    errors,
  } = useFormHandler();

  if (isSubmitted) {
    return <FormaSuccess />;
  }

  const phoneValidation = {
    required: "Поле не заполнено",
    pattern: {
      value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      message: "Номер введен не корректно",
    },
  };

  return (
    <div>
      <h1>Оставьте заявку</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={`${styles.formblock} ${styles.select}`}>
          <select
            className={errors.name ? styles.errorinput : ""}
            {...register("selectField", { required: "Поле не заполнено" })}
          >
            <option value="">Выберете город</option>
            <option value="1">Москва</option>
            <option value="2">Санкт-Петербург</option>
            <option value="3">Краснодар</option>
          </select>
          <label htmlFor="selectField"></label>
          {errors.selectField && (
            <p className={styles.error}>{errors.selectField.message}</p>
          )}
        </div>
        <div className={styles.formblock}>
          <input
            type="text"
            placeholder=" "
            className={errors.name ? styles.errorinput : ""}
            {...register("name", {
              required: "Поле не заполнено",
              minLength: {
                value: 2,
                message: "Поле не должно содержать меньше 2-х символов",
              },
              maxLength: {
                value: 30,
                message: "Поле не должно содержать больше 30 символов",
              },
            })}
          />
          <label>Имя</label>
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.halfwidth}>
          <div className={styles.formblock}>
            <input
              type="email"
              placeholder=" "
              className={errors.email ? styles.errorinput : ""}
              {...register("email", {
                required: "Поле не заполнено",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Введите корректный адрес электронной почты",
                },
              })}
            />
            <label>Email</label>
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.formblock}>
            <Controller
              name="phone"
              control={control}
              rules={phoneValidation}
              render={({ field: { onChange, value } }) => (
                <IMaskInput
                  mask="+7 (000) 000-00-00"
                  type="tel"
                  placeholder=" "
                  className={errors.phone ? styles.errorinput : ""}
                  value={value || ""}
                  onAccept={(value: string) => onChange(value)}
                />
              )}
            />
            <label>Телефон</label>
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className={styles.formblock}>
          <textarea
            className={errors.name ? styles.errorinput : ""}
            placeholder="Оставьте пометку к заказу"
            {...register("mess", {
              required: "Поле не заполнено",
            })}
          ></textarea>
          {errors.mess && <p className={styles.error}>{errors.mess.message}</p>}
        </div>
        <div className={`${styles.formblock} ${styles.file}`}>
          <label>
            <input
              type="file"
              {...register("fileField", { required: "Поле не заполнено" })}
            />
            <p className={errors.fileField ? styles.errorinput : ""}>
              Прикрепите файл
            </p>
            <Icon type={IconType.FILE} />
          </label>
          {errors.fileField && (
            <p className={styles.error}>{errors.fileField.message}</p>
          )}
        </div>
        <div className={`${styles.formblock} ${styles.checkbox}`}>
          <input
            type="checkbox"
            {...register("checkField", { required: "Поле не заполнено" })}
          />
          <label className={errors.checkField ? styles.errorinput : ""}>
            Даю согласие на обработку своих персональных данных
          </label>
          {errors.checkField && (
            <p className={styles.error}>{errors.checkField.message}</p>
          )}
        </div>
        <Button type="submit" theme={ButtonTheme.COLOR}>
          Оставить заявку
        </Button>
        {loading && <Loader />}
      </form>
    </div>
  );
}
