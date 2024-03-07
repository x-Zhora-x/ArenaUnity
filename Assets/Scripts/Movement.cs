using UnityEngine;

public class Movement : MonoBehaviour
{
    public float speed = 5.0f;
    public float rotationSpeed = 720.0f; // Degrees per second to turn the character
    private Animator animator;

    void Start()
    {
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);
        bool isMoving = movement.magnitude > 0.1f;

        // Set the animation state
        animator.SetBool("isRunning", isMoving);

        // Rotate and move the character if there is input
        if (isMoving)
        {
            // Calculate the angle to rotate towards
            float targetAngle = Mathf.Atan2(movement.x, movement.z) * Mathf.Rad2Deg;
            // Rotate smoothly towards the target angle
            transform.rotation = Quaternion.RotateTowards(transform.rotation,
                                                         Quaternion.Euler(0, targetAngle, 0),
                                                         rotationSpeed * Time.deltaTime);
            // Move the character
            transform.position += movement.normalized * speed * Time.deltaTime;
        }
    }
}
